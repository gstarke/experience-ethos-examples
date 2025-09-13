import { withStyles } from '@ellucian/react-design-system/core/styles';
import { spacing40 } from '@ellucian/react-design-system/core/styles/tokens';
import { Typography, TextLink } from '@ellucian/react-design-system/core';
import { useCardInfo } from '@ellucian/experience-extension-utils';
import { useDataQuery } from '@ellucian/experience-extension-extras';
import PropTypes from 'prop-types';
import React from 'react';

const styles = () => ({
    card: {
        marginTop: 0,
        marginRight: spacing40,
        marginBottom: 0,
        marginLeft: spacing40
    }
});

const LsCardPlaygroundCard = () => {
    const { configuration: { PIPELINE_GET_DATA } = {} } = useCardInfo();

 if (!PIPELINE_GET_DATA || PIPELINE_GET_DATA === '') {
        throw new Error('"PIPELINE_GET_DATA" is not configured. See card configuration');
    }


// Define your parameters
    const params = {
        param1: 'LSTARKE',
        param2: '202510'
    };

    // Call useDataQuery with options
    const { data, isLoading, isError } = useDataQuery({
        resource: PIPELINE_GET_DATA,
        parameters: params
    });

    if (isLoading) { return <div>Loading...</div>; }
    if (isError) { return <div>Error loading data.</div>; }

    return (
        <div className={styles.card}>
            <Typography variant="h2">
                Hello LsCardPlayground World!  You are the BEST in the world!
                Here is your data:
                {data}
            </Typography>
        </div>
    );
};

LsCardPlaygroundCard.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LsCardPlaygroundCard);
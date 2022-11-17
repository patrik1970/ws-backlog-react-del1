import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import React from 'react';

const IssueCard: React.FC = () => {

    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography>
                   This is a Card
                </Typography>
            </CardContent>
        </Card>
    )
}

export default IssueCard
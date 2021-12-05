import React from 'react';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';

function DiscussionPost() {
    return (
        <div>
            <Box p={2}>
                <Typography variant='h4'>
                    Título del tema de discusión
                </ Typography>
                <Box pt={2}>
                    <Typography paragraph>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quisquam nemo numquam perspiciatis delectus. Laudantium amet cum dolores eligendi qui fugiat debitis possimus! Maxime consectetur sunt officia minus voluptates ad.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque, tenetur libero! Explicabo, eum quia quisquam optio hic omnis perferendis in consequatur aperiam, commodi fuga nam at! Similique deleniti sed fuga!
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae consectetur doloremque quidem quibusdam a quae tempore assumenda, fuga nostrum harum perspiciatis earum deserunt inventore, vitae aliquid dolorum nulla, tempora debitis!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quidem quos optio mollitia sapiente sint totam doloribus quo error, unde porro vero magnam, odit expedita, saepe quam veritatis qui ipsam.
                    </Typography>
                </Box>
            </Box>
        </div>

    );
}

export { DiscussionPost };
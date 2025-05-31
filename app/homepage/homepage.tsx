import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Typography } from '@mui/material';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { TimelineOppositeContent } from '@mui/lab';

import TimerIcon from '@mui/icons-material/Timer';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';
import LocalTaxiIcon from '@mui/icons-material/LocalTaxi';
import CakeIcon from '@mui/icons-material/Cake';
import EmojiFoodBeverageIcon from '@mui/icons-material/EmojiFoodBeverage';
import IcecreamIcon from '@mui/icons-material/Icecream';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import NightlifeIcon from '@mui/icons-material/Nightlife';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}
function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <Container
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Container sx={{ p: 3 }}>{children}</Container>}
        </Container>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export function HomePage() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Container>
            <Box sx={{ borderBottom: 1, borderColor: 'divider', backgroundColor: 'white', borderRadius: '25px' }}>
                <Tabs value={value} onChange={handleChange} aria-label="home tabs" variant="scrollable" scrollButtons={true} allowScrollButtonsMobile>
                    <Tab label="Schedule" {...a11yProps(0)} />
                    <Tab label="About the gardens" {...a11yProps(1)} />
                    <Tab label="Getting there" {...a11yProps(2)} />
                    <Tab label="Honeymoon fund" {...a11yProps(3)} />
                    <Tab label="Q&A" {...a11yProps(4)} />
                    <Tab label="RSVP" {...a11yProps(5)} />
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                <Schedule />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <Typography>About the gardens</Typography>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                <Typography>Getting there</Typography>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={3}>
                <Typography>Honeymoon fund</Typography>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={4}>
                <Qa />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={5}>
                <Typography>RSVP</Typography>
            </CustomTabPanel>
        </Container>
    )
}

function Qa() {
    return <Container>
        <QuestionAndAnswer question="Dress code?" answer="The groom, groomsmen and bridesmaids will be wearing blue, so please avoid blue and white. The ceremony and the path up to it aren't paved which you may want to bear in mind." />
        <QuestionAndAnswer question="Is the wedding outdoors?" answer="Hopefully yes! There is a contingency plan in case the weather doesn't like us" />
        <QuestionAndAnswer question="Where do I park?" answer="Dorothy Clive Garden has on-site parking near the entrance. Accessible parking is up the hill to the right after the entrance booth for guests who have notified that they need it." />
        <QuestionAndAnswer question="Can I take pictures on the day?" answer="A photographer and videographer will be there to capture the day. We will enforce a no-phones rule for the ceremony but you are free to take pictures during the reception." warning='Note that there will be flash photography.' />
        <QuestionAndAnswer question="Can I bring a plus-one?" answer='Sorry, unless explicitly invited you may not bring an extra guest.' />
        <QuestionAndAnswer question="I still have more questions!" answer='Get in touch with Ben at xxxxxxxx or however else is convenient.' />
    </Container>
}
interface QAProps {
    question: string;
    answer: string;
    warning?: string;
}
function QuestionAndAnswer(props: QAProps) {
    let warningText = props.warning ?
        <Typography variant='h6' align='center'>{props.warning}</Typography> : null;
    return <Box paddingBlockEnd={3}>
        <Typography variant='h5' align='center'>{props.question}</Typography>
        <Typography align='center'>{props.answer}</Typography>
        {warningText}
    </Box>
}

function Schedule() {
    return <Timeline position='alternate'>
        <ScheduleItem time='2:45pm' icon={<TimerIcon/>}>
            <Typography>Guest arrival</Typography>
        </ScheduleItem>
        <ScheduleItem time='3:30pm' icon={<NotificationsIcon/>}>
            <Typography>Ceremony begins</Typography>
        </ScheduleItem>
        <ScheduleItem time='4:15pm' icon={<PhotoCameraIcon/>}>
            <Typography>Drinks & photos</Typography>
            <Typography>Enjoy a glass of prosecco in the gardens</Typography>
        </ScheduleItem>
        <ScheduleItem time='5:00pm' icon={<IcecreamIcon />}>
            <Typography>Ice cream time</Typography>
            <Typography>An ice cream cart will be set up near the tea room</Typography>
        </ScheduleItem>
        <ScheduleItem time='5:30pm' icon={<EmojiFoodBeverageIcon />}>
            <Typography>Afternoon tea</Typography>
        </ScheduleItem>
        <ScheduleItem time='6:00pm' icon={<CakeIcon />}>
            <Typography>Cake cutting</Typography>
            <Typography>Nothing like cake after tea and cake</Typography>
        </ScheduleItem>
        <ScheduleItem time='6:15pm' icon={<NightlifeIcon/>}>
            <Typography>First dance</Typography>
            <Typography> Join us in the tea room!</Typography>
        </ScheduleItem>
        <ScheduleItem time='7:30pm' icon={<LocalPizzaIcon />}>
            <Typography>Pizza time</Typography>
            <Typography>Jordy's Pizza will be available near the Bryan Mayer Pavilion</Typography>
        </ScheduleItem>
        <LastScheduleItem time='12:00am' icon={<LocalTaxiIcon />}>
            <Typography>Carriages</Typography>
            <Typography>Music stops at 11:30 & everyone must be gone by midnight</Typography>
        </LastScheduleItem>
    </Timeline>
}

interface ScheduleItemProps {
    children?: React.ReactNode
    icon: React.ReactNode
    time: string,
    event?: string
}
function ScheduleItem(props: ScheduleItemProps) {
    return <TimelineItem>
        <TimelineOppositeContent>{props.time}</TimelineOppositeContent>
        <TimelineSeparator>
            <TimelineDot>{props.icon}</TimelineDot>
            <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>{props.children}</TimelineContent>
    </TimelineItem>
}
function LastScheduleItem(props: ScheduleItemProps) {
    return <TimelineItem>
        <TimelineOppositeContent>{props.time}</TimelineOppositeContent>
        <TimelineSeparator>
            <TimelineDot >{props.icon}</TimelineDot>
        </TimelineSeparator>
        <TimelineContent>{props.children}</TimelineContent>
    </TimelineItem>
}
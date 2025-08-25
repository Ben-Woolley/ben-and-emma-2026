import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Button, Grid, IconButton, Link, Modal, styled, Tooltip, Typography } from '@mui/material';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent, { timelineOppositeContentClasses, } from '@mui/lab/TimelineOppositeContent';

import TimerIcon from '@mui/icons-material/Timer';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';
import LocalTaxiIcon from '@mui/icons-material/LocalTaxi';
import CakeIcon from '@mui/icons-material/Cake';
import EmojiFoodBeverageIcon from '@mui/icons-material/EmojiFoodBeverage';
import IcecreamIcon from '@mui/icons-material/Icecream';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import NightlifeIcon from '@mui/icons-material/Nightlife';
import ShareIcon from '@mui/icons-material/Share';
import { Masonry } from '@mui/lab';
import QRCode from 'react-qr-code';

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
            sx={{ p: 0, backgroundColor: '#ffffff99' }}
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

    const handleChange = (_: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const [shareIsOpen, setShareIsOpen] = React.useState(false);
    const shareOpen = () => setShareIsOpen(true)
    const shareClose = () => setShareIsOpen(false)

    return (
        <Container aria-label='tabs-container'>
            <Tooltip title="Share page" placement='left' arrow>
                <IconButton onClick={shareOpen} size='large' color='primary' sx={{ position: 'fixed', bottom: 20, right: 20 }}><ShareIcon /></IconButton>
            </Tooltip>
            <Modal
                open={shareIsOpen}
                onClose={shareClose}
            >
                <Box onClick={shareClose} sx={{ position: 'absolute', top: '50%', 'left': '50%', transform: 'translate(-50%, -50%)', bgcolor: 'background.paper', boxShadow: 24, p: 4, }} >
                    <QRCode value="https://wedding.benjam.xyz" fgColor='#304a8a' />
                    <Typography align='center'><Link href="https://wedding.benjam.xyz">https://wedding.benjam.xyz</Link></Typography>
                </Box>
            </Modal>
            <Box sx={{ borderBottom: 1, borderColor: 'divider', backgroundColor: 'white', borderRadius: '25px' }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="home tabs"
                    variant="scrollable"
                    scrollButtons={true}
                    allowScrollButtonsMobile
                    sx={(theme) => ({
                        '& .MuiTabs-flexContainer': {
                            justifyContent: 'center',
                            [theme.breakpoints.down("sm")]: {
                                justifyContent: 'left'
                            }
                        }
                    })}>
                    <Tab label="Schedule" {...a11yProps(0)} />
                    <Tab label="RSVP" {...a11yProps(1)} />
                    <Tab label="Venue" {...a11yProps(2)} />
                    <Tab label="Gifting" {...a11yProps(3)} />
                    <Tab label="Q&A" {...a11yProps(4)} />
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                <Schedule />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <Box sx={{ textAlign: 'center' }}>
                    <Typography>We hope you can make it! But if you can't please tell us as soon as you can.</Typography>
                    <Typography sx={{ fontWeight: 'bold' }}>You will need the verification code on your invitation to complete the RSVP form.</Typography>
                    <br />
                    <Container sx={{ width: '100%', justifyContent: 'center', display: 'flex' }} >
                        <Button target='_blank' variant='outlined' size='large' href="https://forms.gle/aWxr987MAFZUnodNA"><Box fontWeight={'bold'}>RSVP</Box></Button>
                    </Container>
                    <br />
                    <Typography>If you have lost your invitation or the verification code, contact Ben or Emma to get it again.</Typography>
                </Box>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                <Masonry spacing={2} columns={{ sm: 1, md: 2 }}>
                    <Grid size={{ sm: 12, md: 6 }} >
                        <iframe width="100%" height="300" src="https://www.openstreetmap.org/export/embed.html?bbox=-2.3700052499771123%2C52.954455501498%2C-2.3663574457168584%2C52.95852090457078&amp;layer=mapnik&amp;marker=52.95648673726256%2C-2.3681812500000206" style={{ border: '1px solid black' }}></iframe>
                        <Button variant="outlined" target='_blank' sx={{ width: '100%', mb: '5px' }} href="https://www.openstreetmap.org/?mlat=52.956487&amp;mlon=-2.368181#map=18/52.956487/-2.368181">View Larger Map</Button>
                        <Button variant='outlined' target='_blank' sx={{ width: '100%' }} href='Dorothy Clive Garden Map.pdf'>Map of the gardens</Button>
                        <Typography sx={{ pt: 2 }} >
                            Dorothy Clive Garden<br />
                            Willoughbridge<br />
                            Market Drayton<br />
                            Shropshire<br />
                            TF9 4EU<br />
                            Phone: 01630 647 237
                        </Typography>
                    </Grid>
                    <Grid size={{ sm: 12, md: 6 }}>
                        <Typography variant='h5'>About the day</Typography>
                        <Typography><Link href='https://dorothyclivegarden.co.uk/'>Dorothy Clive Garden</Link> lives in the woodland quarter of Staffordshire.
                        </Typography>
                        <Typography>The ceremony will be hosted in the Belvedere located at the top of the garden if weather permits. If not the ceremony will take place in the Bryan Mayer Pavilion which is to the right at the top of the path from the entrance.</Typography>
                        <Typography>The reception will be held in and around the tearoom.</Typography>
                        <Typography>Guests are more than welcome to enjoy the garden after the cermony.</Typography>
                    </Grid>
                    <Grid size={{ sm: 12, md: 6 }}>
                        <Typography variant='h5'>Food</Typography>
                        <Typography>The afternoon tea will be buffet-style. There's no seating plan so feel free to mingle and sit wherever you like!</Typography>
                        <Typography>For pizza time we're bringing in <Link href='https://www.jordyspizza.co.uk/'>Jordy's Pizza</Link>. They'll be set up in a stand in the area between the tearoom and the Bryan Mayer Pavilion for you to order one of a set list of pizzas, plus some sides will be available.</Typography>
                        <Typography sx={{ fontWeight: 'bold' }}>There will be vegan and gluten free options available for those who need it. Please tell us your dietary requirements in your RSVP!</Typography>
                    </Grid>
                </Masonry>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={3}>
                <Box sx={{ textAlign: 'center' }}>
                    <Typography>Thank you for considering getting a gift for us!</Typography>
                    <Typography>We would very much appreciate contributions to our honeymoon fund.</Typography>
                    <Typography>This is obviously not mandatory, having you be here for our special day is plenty.</Typography>
                    <br />
                    <Typography>{"We're"} using <Box display={"inline"} fontWeight={"bold"}>Prezola</Box> - a website that lets you contribute towards gifts and experiences.</Typography>
                    <Typography>So whether you help with our flights or buy us a meal out, everything is greatly appreciated!</Typography>
                    <br />
                    <Container sx={{ width: '100%', justifyContent: 'center', display: 'flex' }} >
                        <Button target='_blank' variant='outlined' size='large' href="https://prezola.com/buy/view/246951">
                            <svg width="102" height="32" viewBox="0 0 102 32" xmlns="http://www.w3.org/2000/svg" aria-label="Prezola logo"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.36297 8.33315H14.0701C16.8521 8.29512 19.1912 10.4119 19.4302 13.1839C19.534 14.6249 19.029 16.0436 18.0378 17.0948C17.0527 18.1462 15.6771 18.7441 14.2363 18.7472H13.2989C12.5891 18.7472 12.0138 18.1718 12.0138 17.462C12.0138 16.7522 12.5891 16.1769 13.2989 16.1769H14.093C15.4833 16.2037 16.6727 15.1839 16.8585 13.8058C16.936 13.063 16.692 12.3226 16.1882 11.7713C15.6886 11.2204 14.98 10.9055 14.2363 10.9039H10.5702V22.185C10.5779 22.6492 10.3346 23.0814 9.9339 23.3158C9.53316 23.5501 9.03719 23.5501 8.63645 23.3158C8.23571 23.0814 7.99249 22.6492 8.00018 22.185V9.69664C8.00076 8.94412 8.61045 8.33412 9.36297 8.33315ZM77.8449 9.62007V20.5637L78.5494 21.2664C79.0533 21.7697 79.0537 22.5862 78.5503 23.0901C78.047 23.5939 77.2305 23.5943 76.7266 23.091L75.88 22.2443C75.4856 21.8522 75.2646 21.3187 75.2661 20.7626V9.62007C75.2825 8.9197 75.855 8.36047 76.5555 8.36047C77.2561 8.36047 77.8286 8.9197 77.8449 9.62007ZM25.3869 14.3385C26.5631 13.0068 28.0208 12.2522 29.4439 12.2522C30.3632 12.2522 31.006 12.8357 31.0053 13.6721C31.0053 14.4733 30.3939 15.0127 29.4845 15.0127H29.362C27.8151 15.0127 25.8565 16.1095 25.3809 17.8832L25.3869 22.1833C25.3946 22.6478 25.1512 23.0804 24.7501 23.3149C24.349 23.5494 23.8527 23.5494 23.4516 23.3149C23.0505 23.0804 22.8071 22.6478 22.8148 22.1833L22.8645 17.8547L22.8148 13.5441C22.8061 13.0796 23.0484 12.6465 23.4489 12.411C23.8493 12.1756 24.3456 12.1744 24.7473 12.4078C25.1489 12.6413 25.3934 13.0732 25.3869 13.5377V14.3385ZM38.4638 12.4042C41.3446 12.4042 43.6024 14.4828 43.6024 17.1364C43.6024 18.1757 43.117 18.7345 41.9828 18.7345H35.5936C35.5982 19.2817 35.8068 19.8075 36.1785 20.2091C36.8244 20.9023 37.8545 21.2844 39.0776 21.2844C39.8981 21.2905 40.7034 21.0629 41.3993 20.6282C41.7 20.4495 42.0626 20.4075 42.3962 20.5129C42.7211 20.6149 42.9861 20.8521 43.1233 21.1637C43.3755 21.7223 43.1677 22.3812 42.6407 22.6941C41.5583 23.3188 40.3273 23.6396 39.0776 23.6226C35.3967 23.6226 33.0183 21.3722 33.0183 17.8903C32.9798 16.4309 33.5398 15.0193 34.5682 13.9831C35.5967 12.947 37.0042 12.3765 38.4638 12.4042ZM41.3378 16.9247L41.3389 16.9247L41.3379 16.9262L41.3378 16.9247ZM38.4726 14.5985C39.9263 14.5999 41.2072 15.5514 41.3378 16.9247L35.6169 16.9396C35.8261 15.5415 37.0607 14.5295 38.4726 14.5985ZM55.8816 21.1775H50.6788L56.458 14.5939C56.7556 14.2569 56.8275 13.7766 56.6418 13.3671C56.456 12.9577 56.0472 12.6955 55.5976 12.6974H48.3261C47.9165 12.6974 47.538 12.9159 47.3332 13.2707C47.1284 13.6254 47.1284 14.0625 47.3332 14.4172C47.538 14.7719 47.9165 14.9905 48.3261 14.9905H53.385L47.4688 21.5624C47.4538 21.5799 47.4402 21.5986 47.4279 21.6181C47.4019 21.6502 47.3777 21.6837 47.3553 21.7183C47.3317 21.7563 47.3105 21.7956 47.2917 21.8362C47.2794 21.8613 47.2685 21.8871 47.2589 21.9134C47.2424 21.9556 47.2286 21.9989 47.2177 22.0429C47.2085 22.081 47.2011 22.1205 47.1944 22.1667L47.1873 22.2288C47.183 22.2601 47.1806 22.2917 47.1803 22.3233C47.1809 22.956 47.6935 23.4687 48.3261 23.4695H55.8816C56.5148 23.4695 57.0281 22.9562 57.0281 22.323C57.0281 21.6898 56.5148 21.1765 55.8816 21.1765V21.1775ZM61.6462 13.9816C62.7129 12.9485 64.1462 12.3815 65.631 12.4053L65.6306 12.4056C65.7142 12.4039 65.7982 12.4039 65.8818 12.4056C67.8855 12.4505 69.713 13.5609 70.676 15.3185C71.6389 17.0762 71.5911 19.2141 70.5504 20.9269C69.5097 22.6396 67.6343 23.6671 65.6306 23.6223C64.1059 23.6414 62.637 23.0489 61.5522 21.9772C60.5121 20.9295 59.933 19.5101 59.9431 18.0339V17.9139C59.9669 16.4292 60.5795 15.0147 61.6462 13.9816ZM67.2196 20.6779C68.1378 20.1176 68.6871 19.1099 68.6607 18.0346C68.6624 17.9764 68.6624 17.9192 68.6607 17.8624C68.6316 16.7862 68.03 15.8075 67.0829 15.2955C66.1358 14.7836 64.9874 14.8165 64.0711 15.3817C63.1548 15.9469 62.6101 16.9585 62.6426 18.0346V18.1803C62.6682 19.2556 63.2657 20.2355 64.2099 20.7508C65.1541 21.266 66.3015 21.2382 67.2196 20.6779ZM93.2344 12.9462C93.4777 13.1964 93.6117 13.533 93.6068 13.882L93.4501 18.0053L93.604 22.2807C93.6054 22.3007 93.6049 22.3208 93.6044 22.3409C93.6042 22.351 93.604 22.361 93.604 22.371C93.5867 22.7051 93.4374 23.0188 93.1889 23.2429C92.9404 23.4669 92.6131 23.5831 92.2789 23.5658C91.7115 23.5923 91.2003 23.2251 91.0442 22.679C90.1723 23.3364 89.106 23.684 88.0142 23.6667C84.9163 23.6667 82.405 21.1554 82.405 18.0575C82.405 14.9597 84.9163 12.4483 88.0142 12.4483C89.1145 12.4321 90.1878 12.7903 91.058 13.464C91.1152 13.2694 91.2173 13.0909 91.356 12.9429C91.595 12.6879 91.9298 12.5446 92.2793 12.5478H92.3093C92.6583 12.5527 92.991 12.6959 93.2344 12.9462ZM85.0872 18.0762C85.0872 19.8306 86.3455 21.1535 88.0152 21.1535L88.1098 21.1539C89.2287 21.161 90.2639 20.5622 90.8157 19.5887C91.3674 18.6152 91.3494 17.4195 90.7685 16.4631C90.1876 15.5067 89.1348 14.9394 88.0166 14.9802H87.9538C86.3074 15.0437 85.024 16.4297 85.0872 18.0762Z" fill="#304a8a"></path></svg>
                        </Button>
                    </Container>
                    <br />
                    <Typography>Or if you prefer, you can contact us directly to get our bank details</Typography>
                </Box>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={4}>
                <Qa />
            </CustomTabPanel>
        </Container >
    )
}

function Qa() {
    return <Container>
        <QuestionAndAnswer question="Dress code?" answer="The groom, groomsmen and bridesmaids will be wearing blue, so please avoid blue and white. The ceremony and the path up to it aren't paved which you may want to bear in mind." />
        <QuestionAndAnswer question="Is the wedding outdoors?" answer="Hopefully yes! There is a contingency plan in case the weather doesn't like us" />
        <QuestionAndAnswer question="Where do I park?" answer="Dorothy Clive Garden has on-site parking near the entrance. Accessible parking is up the hill to the right after the entrance booth for guests who have notified that they need it." />
        <QuestionAndAnswer question="Can I take pictures on the day?" answer="A photographer and videographer will be there to capture the day. We will enforce a no-phones rule for the ceremony but you are free to take pictures during the reception." warning='Note that there will be flash photography.' />
        <QuestionAndAnswer question="Can I bring a plus-one?" answer='Sorry, unless explicitly invited you may not bring an extra guest.' />
        <QuestionAndAnswer question='Where are the toilets?' answer='There are toilets at the end of the bottom car park and in the tearoom.' />
        <QuestionAndAnswer question="I still have more questions!" answer='Get in touch with Ben or Emma however is convenient.' />
    </Container>
}
interface QAProps {
    question: string;
    answer: string;
    warning?: string;
}
function QuestionAndAnswer(props: QAProps) {
    let warningText = props.warning ?
        <Warning variant='h6' align='center'>{props.warning}</Warning> : null;
    return <Box paddingBlockEnd={3}>
        <Question>{props.question}</Question>
        <Answer align='center'>{props.answer}</Answer>
        {warningText}
    </Box>
}
const Question = styled(Typography, {
    name: 'MuiQuestion',
    slot: 'value',
})(({ theme }) => ({
    ...theme.typography.body1,
    fontWeight: 'bolder',
    textAlign: 'center'
}));
const Answer = styled(Typography, {
    name: 'MuiAnswer',
    slot: 'value',
})(({ theme }) => ({
    ...theme.typography.body1,
    textAlign: 'center'
}));
export const Warning = styled(Typography, {
    name: 'MuiWarning',
    slot: 'value',
})(({ theme }) => ({
    ...theme.typography.body1,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '16pt'
}));

function Schedule() {
    return <Timeline aria-label='timeline' sx={(theme) => ({
        [`& .${timelineOppositeContentClasses.root}`]: {
            [theme.breakpoints.down("lg")]: {
                flex: 0.05
            },
            flex: 0.5
        },
        p: 0
    })}>
        <ScheduleItem time='2:45pm' event='Guest Arrival' icon={<TimerIcon />}>
        </ScheduleItem>
        <ScheduleItem time='3:30pm' event='Ceremony begins' icon={<NotificationsIcon />}>
        </ScheduleItem>
        <ScheduleItem time='4:15pm' event='Drinks & photos' icon={<PhotoCameraIcon />}>
            <Typography variant='body2'>Enjoy a glass of prosecco in the gardens</Typography>
        </ScheduleItem>
        <ScheduleItem time='5:00pm' event='Ice cream' icon={<IcecreamIcon />}>
            <Typography variant='body2'>An ice cream cart will be set up near the tea room</Typography>
        </ScheduleItem>
        <ScheduleItem time='5:30pm' event='Afternoon tea' icon={<EmojiFoodBeverageIcon />}>
            <Typography>Ahh, nothing like a nice cuppa tea!</Typography>
        </ScheduleItem>
        <ScheduleItem time='6:00pm' event='Cake cutting' icon={<CakeIcon />}>
            <Typography variant='body2'>Nothing like cake after tea and cake</Typography>
        </ScheduleItem>
        <ScheduleItem time='6:15pm' event='First dance' icon={<NightlifeIcon />}>
            <Typography variant='body2'>Join us in the tea room!</Typography>
        </ScheduleItem>
        <ScheduleItem time='7:30pm' event='Pizza time' icon={<LocalPizzaIcon />}>
            <Typography variant='body2'>Jordy's Pizza will be available near the Bryan Mayer Pavilion</Typography>
        </ScheduleItem>
        <LastScheduleItem time='12:00am' event='Carriages' icon={<LocalTaxiIcon />}>
            <Typography variant='body2'>Music stops at 11:30 & everyone must be gone by midnight</Typography>
        </LastScheduleItem>
    </Timeline>
}

interface ScheduleItemProps {
    children?: React.ReactNode
    icon: React.ReactNode
    time: string,
    event: string
}
function ScheduleItem(props: ScheduleItemProps) {
    return <TimelineItem>
        <TimelineOppositeContent></TimelineOppositeContent>
        <TimelineSeparator>
            <TimelineDot color='primary'>{props.icon}</TimelineDot>
            <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
            <Typography variant='h6'>{props.time} - {props.event}</Typography>
            {props.children}
        </TimelineContent>
    </TimelineItem>
}
function LastScheduleItem(props: ScheduleItemProps) {
    return <TimelineItem>
        <TimelineOppositeContent></TimelineOppositeContent>
        <TimelineSeparator>
            <TimelineDot color='primary'>{props.icon}</TimelineDot>
        </TimelineSeparator>
        <TimelineContent>
            <Typography variant='h6'>{props.time} - {props.event}</Typography>
            {props.children}
        </TimelineContent>
    </TimelineItem>
}
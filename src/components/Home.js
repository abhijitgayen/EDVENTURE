import React from 'react'
import Tab from 'react-bootstrap/Tab';
import { Col, Container, Row, Button, Tabs } from 'react-bootstrap';
import online_learning from '../images/online_learning.svg'
import AllCourse from './AllCourse';
import CourseStyle from './CourseStyle';
import DemoClass from './DemoClass';
import blog_1 from '../images/blog1.jpg'
import tutorial_video from '../images/tutorial_video.svg'
import CarouselHome from './CarouselHome';
import TutorCarouselHome from './TutorCarouselHome';

export default function Home() {
    return (
        <>
            <section className="home_section" id='Home'>
                <header className="home_top" id="set-for-bg">
                    <Container>
                        <Row>
                            <Col className="home_top_text col-12 col-sm-12 col-md-8 col-xl-6">
                                <h1 >EMBARK ON AN ADVENTURE TO MORDERN INTERACTIVE EDUCATION</h1>
                                <p>Handcrafted at IIT , Edventure aim to impart rich Courses helping Students in academics as well as competitative Exams</p>
                                <Button variant="light" href='#venture' >VENTURE NOW</Button>
                            </Col >
                            <Col className="col-12 col-sm-12 col-md-7 offset-md-5 col-xl-6 offset-xl-0">
                                <img src={online_learning} alt='online_learning' id='home_img' />
                            </Col>
                        </Row>
                    </Container>
                </header>
                <Container className='home_mid_f' >
                    <Row className='justify-content-center'>
                        <Col className='home_cb col-7 col-sm-6 col-md-3'>
                            <div className='home_card '>
                                <h1>250+</h1>
                                <p>Students </p>
                            </div>
                        </Col>
                        <Col className='home_cb col-7 col-sm-6 col-md-3'>
                            <div className='home_card'>
                                <h1>50+</h1>
                                <p>Top IITs Tutor</p>
                            </div>
                        </Col>
                        <Col className='home_cb col-7 col-sm-6 col-md-3'>
                            <div className='home_card'>
                                <h1>25+</h1>
                                <p>Course Avaliable</p>
                            </div>
                        </Col>
                        <Col className='home_cb col-7 col-sm-6 col-md-3'>
                            <div className='home_card'>
                                <h1>80%</h1>
                                <p>Better Enhanced Programs</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="home_section">
                <div className='course_details'>
                    <CourseStyle />
                </div>
                <div className='all_course' id="venture">
                    <AllCourse />
                </div>
                <div className='book_demo'>
                    <DemoClass />
                </div>
            </section>

            <section className="home_section">

                <Container className='table_section'>
                    <h4 className='section_heading'> Let no pandemic hamper your results !!</h4>
                    <Row >
                        <Col className='table_set_img col-12 col-sm-12 col-md-5 col-xl-4'>
                            <img src={tutorial_video} alt='' className='table_img'></img>
                        </Col>
                        <Col className='table_content col-11 col-sm-11 col-md-6 col-xl-7'>
                            <div>
                                <Row>
                                    <Col className='table_com col-12 col-sm-12 col-md-12 col-xl-2'>{' '}</Col>
                                    <Col className='table_com padding_table_cen col-6 col-sm-6 col-md-6 col-xl-5'>Normal Tuition</Col>
                                    <Col className='table_com padding_table_cen col-6 col-sm-6 col-md-6 col-xl-5'>Edventure's Flagship Tution</Col>
                                </Row>
                                <Row>
                                    <Col className='table_com col-12 col-sm-12 col-md-12 col-xl-2'>Best qualified teachers</Col>
                                    <Col className='table_data col-6 col-sm-6 col-md-6 col-xl-5'>Teachers are good without much revision of skills.</Col>
                                    <Col className='table_data col-6 col-sm-6 col-md-6 col-xl-5'>India’s best teachers selected through multiple tests with the best conceptual clarity.</Col>
                                </Row>
                                <Row>
                                    <Col className='table_com col-12 col-sm-12 col-md-12 col-xl-2'>Personalized Teaching</Col>
                                    <Col className='table_data col-6 col-sm-6 col-md-6 col-xl-5'>Lack of personalized classes.</Col>
                                    <Col className='table_data col-6 col-sm-6 col-md-6 col-xl-5'>Personalized extra classes to ensure students sail through the technical concepts before moving to the next topic.</Col>
                                </Row>
                                <Row>
                                    <Col className='table_com col-12 col-sm-12 col-md-12 col-xl-2'>Interactive Education </Col>
                                    <Col className='table_data col-6 col-sm-6 col-md-6 col-xl-5'>Mainstream methodology of teaching.</Col>
                                    <Col className='table_data col-6 col-sm-6 col-md-6 col-xl-5'>Practical Learning with real life examples and visualizations harnessing the modern technologies.</Col>
                                </Row>
                                <Row>
                                    <Col className='table_com col-12 col-sm-12 col-md-12 col-xl-2'>Assessments and Mentorship</Col>
                                    <Col className='table_data col-6 col-sm-6 col-md-6 col-xl-5'>These are done in the traditional way with 1: many teacher to students ratio.</Col>
                                    <Col className='table_data col-6 col-sm-6 col-md-6 col-xl-5'>Regular assessments with 1:1 feedback for improvement and personalized mentorship.</Col>
                                </Row>
                                <Row>
                                    <Col className='table_com col-12 col-sm-12 col-md-12 col-xl-2'>Content and Pricing</Col>
                                    <Col className='table_data col-6 col-sm-6 col-md-6 col-xl-5'>Content may/ may not be updated with varying prices.</Col>
                                    <Col className='table_data col-6 col-sm-6 col-md-6 col-xl-5'>Frequent updates to our content based on latest changes and competitive pricing following referral programs.</Col>
                                </Row>

                            </div>
                        </Col>
                    </Row>
                </Container>

                {/* why Edventure */}
                <div className='why_ed_all'>
                    <Container>
                        <h4 className='section_heading'>Why Edventure:</h4>
                        <Row className='why_ed'>
                            <div className='why_edven col-6 col-sm-4 col-md-4 col-xl-2' >
                                <img src={blog_1} className='why_edven_img' alt=' ' />
                                <h6>The best teacher in the industry from IIT, NIT, having rich experience</h6>
                            </div>
                            <div className='why_edven col-6 col-sm-4 col-md-4 col-xl-2' >
                                <img src={blog_1} className='why_edven_img' alt=' ' />
                                <h6>Personalised content and adaptive teaching</h6>
                            </div>
                            <div className='why_edven col-6 col-sm-4 col-md-4 col-xl-2' >
                                <img src={blog_1} className='why_edven_img' alt=' ' />
                                <h6>Live and Interactive</h6>
                            </div>
                            <div className='why_edven col-6 col-sm-4 col-md-4 col-xl-2' >
                                <img src={blog_1} className='why_edven_img' alt=' ' />
                                <h6>Concept Building through interactive quizes and regular assessments</h6>
                            </div>
                            <div className='why_edven col-6 col-sm-4 col-md-4 col-xl-2' >
                                <img src={blog_1} className='why_edven_img' alt=' ' />
                                <h6>Most affordable int the market</h6>
                            </div>
                            <div className='why_edven col-6 col-sm-4 col-md-4 col-xl-2' >
                                <img src={blog_1} className='why_edven_img' alt=' ' />
                                <h6>Personal monitoring and career guidance</h6>
                            </div>
                        </Row>
                    </Container>
                </div>
                <h4 className='section_heading'>Let’s hear from our students and parents:</h4>
                <Container>
                    <Row>
                        <Col className='carousel_all col-11 col-sm-11 col-md-11 col-xl-11'>
                            <CarouselHome />
                            <h4 className='section_heading'>Meet our talented mentors:</h4>
                            <TutorCarouselHome />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h4 className='section_heading'>Free lecture videos :</h4>
                            <Tabs defaultActiveKey="dropper" id="uncontrolled-tab-example" className="mb-3">
                                <Tab eventKey="dropper" title="Dropper" >
                                    <div>
                                        Dropper Courses
                                    </div>
                                </Tab>
                                <Tab eventKey="grade-12" title="Grade 12">
                                    <div>
                                        Grade-12 course
                                    </div>
                                </Tab>
                                <Tab eventKey="grade-11" title="Grade 11">
                                    <div>
                                        Grade-11 course
                                    </div>
                                </Tab>
                                <Tab eventKey="grade-10" title="Grade 10">
                                    <div>
                                        Grade-10 course
                                    </div>
                                </Tab>
                                <Tab eventKey="grade-9" title="Grade 9">
                                    <div>
                                        Grade-9 course
                                    </div>
                                </Tab>
                                <Tab eventKey="grade-8" title="Grade 8">
                                    <div>
                                        Grade-8 course
                                    </div>
                                </Tab>
                                <Tab eventKey="grade-7" title="Grade 7">
                                    <div>
                                        Grade-7 course
                                    </div>
                                </Tab>
                                <Tab eventKey="grade-6" title="Grade 6">
                                    <div>
                                        Grade-6 course
                                    </div>
                                </Tab>
                                <Tab eventKey="grade-1-5" title="Grade 1-5">
                                    <div>
                                        Grade-1-5 course
                                    </div>
                                </Tab>
                                <Tab eventKey="contact" title="Contact" disabled>
                                    <div>
                                        contacts
                                    </div>
                                </Tab>
                            </Tabs>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}




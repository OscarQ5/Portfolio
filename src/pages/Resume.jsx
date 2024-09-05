import React from 'react';
import { Container, Row, Col, ListGroup, Button } from 'react-bootstrap'
import resumePDF from '/Pursuit_resume.docx.pdf'

const Resume = () => {
    return (
        <Container className="my-5">
            <Row className="justify-content-center">
                <Col md={10}>
                    <div className="contactInfo mb-4">
                        <ListGroup>
                            <ListGroup.Item>
                                <strong>Email:</strong> <a href="mailto:oskyq2010@gmail.com" target="_blank" rel="noopener noreferrer">oskyq2010@gmail.com</a>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <strong>LinkedIn:</strong> <a href="https://linkedin.com/in/oscarquintanilla5/" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/oscarquintanilla5/</a>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <strong>GitHub:</strong> <a href="https://github.com/OscarQ5" target="_blank" rel="noopener noreferrer">https://github.com/OscarQ5</a>
                            </ListGroup.Item>
                        </ListGroup>
                    </div>

                    <div className="experience mb-4">
                        <h2>Technical Skills</h2>
                        <ListGroup>
                            <ListGroup.Item>Front End: JS, Node.js, React, HTML/CSS, JSON, NPM, Git, Fetch, Version Control, Cross-Browser Development, Command Line, Responsive Design, DOM, APIs</ListGroup.Item>
                            <ListGroup.Item>Back End: Express.js, RESTful APIs, PostgreSQL, Web Servers, Asynchronous Programming, Data Modeling, Server Management, Database Fundamentals, JWT</ListGroup.Item>
                            <ListGroup.Item>Soft Skills: Teamwork and Collaboration, Problem-Solving, Adaptability, Time Management, Critical Thinking, Attention to Detail, Continuous Learning</ListGroup.Item>
                        </ListGroup>

                        <h2 className="mt-4">Software Engineering Projects</h2>
                        <h3 className="mt-4">Village App | <a href="https://the-village.netlify.app/" target="_blank" rel="noopener noreferrer">Live-Site</a> | <a href="https://github.com/OscarQ5/Oscar_Capstone_Frontend" target="_blank" rel="noopener noreferrer">Front-End</a> | <a href="https://github.com/OscarQ5/Oscar_Capstone_Backend" target="_blank" rel="noopener noreferrer">Back-End</a></h3>
                        <ListGroup>
                            <ListGroup.Item>Technology Utilized: Javascript, Git, HTML, CSS, Node.js, React, PostgreSQL, Express, i18next, Bcrypt, Cors, JWT, MapBox, Twilio</ListGroup.Item>
                            <ListGroup.Item>Synopsis: The Village app is a streamlined safety platform built on the principle of community support. It swiftly alerts emergency contacts and predefined support
                                networks during critical situations, leveraging features like geo-location and push notifications. Utilizing technology like JavaScript, React, Node.js, Express, and PostgreSQL, along with API services from MapBox & Twilio, this project empowers village administrators with robust tools for effective community management.</ListGroup.Item>
                            <ListGroup.Item>
                                <ul>
                                    <li>Implemented using React, JavaScript, HTML, and CSS to create a responsive and interactive user interface, with secure authentication and
                                        authorization mechanisms implemented to ensure data privacy and user access control.</li>
                                    < br />
                                    <li>Effortlessly manage village members by adding, removing, and updating user information while also handling join requests from users seeking
                                        to join the village, providing administrators with the ability to approve or reject requests.</li>
                                    < br />
                                    <li>Foster a sense of belonging and community spirit by facilitating interaction, collaboration, and mutual support among residents.</li>
                                    < br />
                                    <li>Designed with scalability in mind, the Village app can adapt to the needs of villages of varying sizes and complexities, from small rural
                                        communities to larger suburban neighborhoods.</li>
                                </ul>
                            </ListGroup.Item>
                        </ListGroup>

                        <h3 className="mt-4">Roast | <a href="https://roast-ny.netlify.app/" target="_blank" rel="noopener noreferrer">Live-Site</a> | <a href="https://github.com/JBMontes/Roast-Frontend" target="_blank" rel="noopener noreferrer">Front-End</a> | <a href="https://github.com/OscarQ5/Roast-Backend" target="_blank" rel="noopener noreferrer">Back-End</a></h3>
                        <ListGroup>
                            <ListGroup.Item>Technology Utilized: Javascript, Git, HTML, CSS, Node.js, React, PostgreSQL, Express</ListGroup.Item>
                            <ListGroup.Item>Synopsis: Roast is a full-stack application designed for coffee enthusiasts to document and explore various coffee experiences. Leveraging technologies like
                                JavaScript, HTML, CSS, Node.js, React, PostgreSQL and Express while providing a seamless and interactive user experience.</ListGroup.Item>
                            <ListGroup.Item>
                                <ul>
                                    <li>Implemented using JavaScript, HTML, and CSS to create a responsive and interactive user interface.</li>
                                    < br />
                                    <li>Enjoy an optimal user experience across different devices and screen sizes, ensuring accessibility on the go.</li>
                                    < br />
                                    <li>Effortlessly add new coffee entries to the inventory by providing detailed information such as name, origin, roast, flavor notes, grind and price.</li>
                                    < br />
                                    <li>Users can easily remove coffee from the inventory, maintaining a precise and clutter-free collection.</li>
                                    < br />
                                    <li>Successfully integrated features for adding, editing, and removing coffee entries, enhancing user engagement.</li>
                                </ul>
                            </ListGroup.Item>
                        </ListGroup>

                        <h3 className="mt-4">GeoCar Exchange | <a href="https://aesthetic-crisp-160450.netlify.app/" target="_blank" rel="noopener noreferrer">Live-Site</a> | <a href="https://github.com/OscarQ5/GeoCar_Exchange_FrontEnd" target="_blank" rel="noopener noreferrer">Front-End</a> | <a href="https://github.com/OscarQ5/GeoCar_Exchange_BackEnd" target="_blank" rel="noopener noreferrer">Back-End</a></h3>
                        <ListGroup>
                            <ListGroup.Item>Technology Utilized: Javascript, Node.js, React, PostgreSQL, Radar.io API, HTML, Bulma CSS, Express, Git</ListGroup.Item>
                            <ListGroup.Item>Synopsis: Developed an innovative GeoCar Exchange platform that facilitates the buying and selling of vehicles. Leveraged JavaScript and React for the front end,
                                Node.js for the back end, and PostgreSQL for data storage. Integrated Radar API for geocoding and location services.</ListGroup.Item>
                            <ListGroup.Item>
                                <ul>
                                    <li>Created a dynamic and user-friendly interface for listing, viewing, and managing vehicle details.</li>
                                    < br />
                                    <li>Integrated Radar API to provide accurate geolocation data for each listed vehicle.</li>
                                    < br />
                                    <li>Deployed the front end on Netlify and the back end on Render.com for efficient hosting and scalability.</li>
                                    < br />
                                    <li>Designed an interactive and responsive UI using React, enhancing user engagement and satisfaction.</li>
                                </ul>
                            </ListGroup.Item>
                        </ListGroup>
                    </div>

                    <div className="workExperience mb-4">
                        <h2>Work Experience</h2>< br />
                        <h3>Doordash</h3>
                        <p><strong>Delivery Driver</strong> | Oct. 2019 - Present</p>
                        <ListGroup>
                            <ListGroup.Item><strong>Exemplary Customer Service:</strong> Delivering food and various items promptly to customers, consistently providing a high level of customer service.</ListGroup.Item>
                            <ListGroup.Item><strong>Timely Deliveries:</strong> Ensuring on-time completion of food deliveries, fostering positive and memorable experiences for customers.</ListGroup.Item>
                            <ListGroup.Item><strong>Effective Time Management:</strong> Proficiently managing time to meet delivery deadlines, contributing to high customer satisfaction, and enhancing brand reputation.</ListGroup.Item>
                            <ListGroup.Item><strong>Local Area Knowledge:</strong> Maintaining a comprehensive understanding of the current delivery area, including streets, landmarks, and the locations of restaurants and customers.</ListGroup.Item>
                            <ListGroup.Item><strong>Vehicle Maintenance:</strong> Prioritizing the cleanliness and optimal functioning of the delivery vehicle before accepting any delivery, ensuring a reliable and safe service.</ListGroup.Item>
                            <ListGroup.Item><strong>Customer-Centric Approach:</strong> Sustaining excellent customer service skills throughout the delivery process, whether to customers' homes or businesses.</ListGroup.Item>
                        </ListGroup>

                        <h3 className="mt-4">A.G. Adjustments LTD</h3>
                        <p><strong>Customer Service Representative - Skip Tracer</strong> | June. 2015 - Aug. 2020</p>
                        <ListGroup>
                            <ListGroup.Item><strong>Client Location Expertise:</strong> Employed credit bureau information, background checks, loan documents, and various databases to efficiently locate clients.</ListGroup.Item>
                            <ListGroup.Item><strong>Data Accuracy:</strong> Ensured the accuracy of client information, facilitating effective contact for debt collection purposes.</ListGroup.Item>
                            <ListGroup.Item><strong>Compliance Adherence:</strong> Utilized computer systems to contact clients and obtain information, meticulously following federal and state laws governing debt collection practices.</ListGroup.Item>
                            <ListGroup.Item><strong>Reporting and Documentation:</strong> Generated and distributed daily reports to management, ensuring comprehensive coverage of all collection-related emails.</ListGroup.Item>
                            <ListGroup.Item><strong>Efficient Communication:</strong> Employed strong communication skills to establish contact with clients, fostering an environment conducive to successful debt collection.</ListGroup.Item>
                        </ListGroup>
                    </div>

                    <div className="education mb-4">
                        <h2>Education</h2>
                        <ListGroup>
                            <ListGroup.Item>
                                <strong>Pursuit</strong> | New York, NY< br />< br />
                                <strong>Full Stack Web Development Fellow at Pursuit:</strong> 12-month, Google-funded software engineering fellowship with a 9% acceptance rate whose graduates have been hired as developers at leading companies such as Pinterest, JP Morgan, and Spotify. Project-based curriculum provides hands-on experience with JavaScript, HTML, CSS, Node, Express, React/Redux, PostgreSQL, APIs, Git, Data Structures, Algorithms, sprints, Agile, code reviews, and pair programming.
                            </ListGroup.Item>
                        </ListGroup>
                    </div>
                </Col>
            </Row>
            <Row className="justify-content-center mt-4">
                <Col md="auto">
                    <Button
                        href={resumePDF}
                        target="_blank"
                        download
                        className="btn btn-primary"
                    >
                        Download PDF
                    </Button>
                </Col>
            </Row>
        </Container>
    );
};

export default Resume;
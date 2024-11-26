import React from 'react'
import { Container, Row, Col} from 'react-bootstrap'
import {AboutImage, AboutHero, AboutStory, AboutHeader, AboutPhases} from './AboutStyle';
import aboutLogo from './../../images/about/about-logo.png';

import about1 from './../../images/phases/about-1.png';
import about2 from './../../images/phases/about-2.png';
import about3 from './../../images/phases/about-3.png';



const AboutPage = () => {
	return (
		<Container fluid className="about-container">
			<AboutImage>
				<AboutHero>
					<h1>Heal a Hurting World</h1>
					<p>We are driven by a desire to impact and fulfill a mission that omits greed and focuses on the needs of the homeless population.</p>
				</AboutHero>
			</AboutImage>
			<AboutStory>
				<div className="mini-container">
					<h2 className="about-img-title">Our Story</h2>
					<div className="about-us-text">
						<div className="mt-md-3 mt-lg-3 mt-sm-5 mt-5 lr-container">
							<div className="about-img">
								<div className="about-image-container headshot-1">
									{/* Image styling on aboutstyle */}
								</div>
								<p className="about-img-title">Executive Director</p>
							</div>
							<p>Doris Smith is a dynamic leader and social advocate, driven by a deep passion for improving the lives of underserved populations. As the Founder and Executive Director of Platform of Hope, Doris is committed to addressing homelessness and supporting families in need. With a mission focused on feeding, housing, and clothing families, Doris’s work is rooted in compassion, service, and social change. She is particularly dedicated to supporting those experiencing homelessness, working tirelessly to transform their lives through essential services and empowerment programs.</p>
							<p>A native of Aberdeen, Mississippi, Doris brings over 20 years of diverse experience, having worked in corporate America, nonprofits, and at the Georgia Department of Family and Children Services (DFCS). Her career journey is a testament to her resilience and dedication to public service. After working in various sectors, Doris defied the odds in 2016 by using her personal savings to establish Platform of Hope, starting from a modest two-room storefront in Decatur, Georgia.</p>
							<p>Doris holds a Bachelor's degree from Mississippi State University and a Master of Divinity from Columbia Theological Seminary in Decatur, GA.</p>
							<p>In addition to her work with Platform of Hope, Doris has made significant contributions to the justice system and community empowerment. She has spent several years teaching a self-devised curriculum in Fulton County Jail, focusing on job readiness, soft skills, and basic computer applications. These programs are designed to equip incarcerated individuals with the tools they need to reintegrate into society successfully. Upon their release, Doris pairs these individuals with community partners for second-chance employment; supporting the broader goals of reducing recidivism and ending mass incarceration.</p>
							<p>Doris is also an active advocate for children’s safety and the fight against human trafficking. She serves as a Volunteer Chaplain at DeKalb County Jail and has been deeply involved in initiatives aimed at addressing homelessness, child protection, and systemic reform in the justice system. Additionally, Doris has extensive experience with federal social service programs.</p>
							<p>Outside of her professional commitments, Doris has a strong passion for international mission work, and in her free time, she enjoys volunteering, playing tennis, and traveling. Doris serves alongside her spouse in ministry. Together, they share a vision of community transformation and service.</p>
							<p>Doris's leadership is characterized by a commitment to principles of service, ethics, and social change. She continues to lead Platform of Hope with a deep sense of purpose, striving to create lasting change for families and individuals facing adversity. Her dedication to empowering others makes her a respected leader in both the local and global communities.</p>
						</div>
						<div className="mt-md-3 mt-lg-3 mt-sm-5 mt-5 lr-container">
							<div className="about-img">
								<div className="about-image-container headshot-2">
									{/* Image styling on aboutstyle */}
								</div>
								<p className="about-img-title">Co-Executive Director</p>
								<p className="about-img-title">Licensed Professional Counselor, LPC, NCC, MDiv, MS</p>
							</div>
							<p>Rev. Erica D. Geralds is the Co-Executive Director of Platform of Hope. She is a Trauma-Informed Womanist Licensed Professional Counselor, Clinical Professional Counselor Supervisor, Clinical Chaplain, and Ordained Minister, whose work bridges the intersection of psychology, theology, and social justice. With a Master’s degree in Clinical Mental Health Counseling and a Master of Divinity from Mercer University, Rev. Erica is deeply committed to healing, empowerment, and advocacy for marginalized communities.</p>
							<p>She holds a Bachelor’s degree in Communication Studies from Northern Illinois University, which laid the foundation for her lifelong passion for communication and healing through conversation, therapy, and ministry. Rev. Erica currently serves as the Assistant Director of Counseling & Psychological Services at Mercer University in Atlanta, GA. She also owns a private practice.</p>
							<p>Throughout her career, Rev. Erica has skillfully integrated theology and psychology, providing counseling and spiritual care in healthcare, hospice settings, private practice, nonprofit organizations, and university counseling services. She has supervised, trained, and mentored numerous students in pursuit of ordained ministry, certified chaplaincy, mental health counseling, and divinity degrees, equipping the next generation of leaders in mental health and ministry.</p>
							<p>Rev. Erica’s leadership extends beyond the classroom and office. She has served as an associate minister in local churches and facilitated clergy consultation groups. She has also provided training and leadership on topics including healthy boundaries, pastoral care, mental health counseling, suicide prevention, and education. As a queer practitioner and activist, Rev. Erica is deeply committed to social justice, working to reduce racial mental health disparities and destigmatize therapy for marginalized communities. She consults with clergy and faith-based organizations to establish and deepen mental health ministries and has led training sessions for women in ministry, LGBTQIA+ individuals, and BIWOC (Black, Indigenous, and other Women of Color).</p>
							<p>Rev. Erica’s holistic approach to healing incorporates a trauma-informed, diverse, and resilient framework, emphasizing the importance of mental, psychological, physical, financial, relational, and spiritual well-being. Her work continues to inspire and transform individuals, communities, and organizations, fostering spaces where healing, growth, and justice intersect.</p>
						</div>
					</div>
				</div>
			</AboutStory>
			<hr></hr>
			<AboutHeader>
				<div className="about-header-container container">
					<div className="about-header">
						<h2>The Difference</h2>
						<p>While other agencies look great on paper, thousands of dollars go toward bonuses to employees each year. Fortunately, while Platform of Hope awaits state and federal funding, every dime is allocated TO the client for stabilization. We rely heavily on donations from family, friends, and the community for services and operating costs.</p>
					</div>
				</div>

			</AboutHeader>

		<AboutPhases>
			<div className="container about-phases">
					<Row>

					<Col xl={6} className="phases-container mt-md-5 mt-xl-0 mt-lg-0 mt-sm-5">
							<div className="phase-1">
							<img src={about1} alt="an emtpy room"></img>
							<div className="mt-3">
								<h3>Phase 1</h3>
							   <p>Due to lack in current funding, services are being introduced in phases. During the first phase services consist of a food pantry and coat/cap/blanket closet. Based on funding, clients also receive assistance with prescriptions and transportation to/from work or organization.</p>
							   </div>
							</div>


						</Col>
						<Col xl={6} className="phases-container mt-md-5 mt-xl-0 mt-lg-0 mt-sm-5">
							<div className="phase-1 py-md-3 py-xl-0 py-lg-0 py-sm-3 py-xs-3">
							<img src={about2} alt="bed spaces"></img>
							<div className="mt-3">
								<h3>Phase 2</h3>
							   <p>In addition to the food pantry and clothes closet enhancement, Phase II introduces a much more aggressive approach to stabilization and will incorporate a small dormitory-style 25-bed shelter for women and children.</p>
							   </div>
							</div>


						</Col>
						<Col xl={12} className="phases-container mt-md-5 mt-xl-5 mt-lg-5 mt-sm-5">
							<div className="phase-1 py-md-3 py-xl-0 py-lg-0 py-sm-3 py-xs-3 final-phase">
							<img src={about3} alt="housing for final phase"></img>
							<div className="mt-3">
								<h3>Final Phase</h3>
							   <p>The final phase of Platform of Hope will introduce an array of services such as supportive employment, transportation services, educational assistance, GED/typing classes, Federal/State benefits application assistance, daycare resources, HIV testing, address and mail service, and much more.</p>
							   </div>
							</div>


						</Col>

					</Row>
			</div>
		</AboutPhases>

		</Container>
	)
}

export default AboutPage;

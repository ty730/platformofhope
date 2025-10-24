import React from 'react';
import '../App.css';
import {Helmet} from 'react-helmet'
import { Row, Col } from 'react-bootstrap';

function International() {
  return (
    <div className="International">
      <Helmet>
        <title>International - Platform of Hope in Atlanta, Georgia</title>
      </Helmet>
      <div className="international-header">
        <h2>Platform of Hope International</h2>
        <p>
            Building Faith, Connection, and Hope Across Borders
        </p>
        <hr/>
      </div>
      <Row>
        <Col>
          <h2>International Faith Circles Kisumu, Kenya</h2>
          <p>Platform of Hope International is expanding its mission to Kisumu, Kenya — creating a vibrant space for connection, growth, and spiritual insight across cultures.</p>
          <p>The International Faith Circle of Kisumu brings together leaders, families, and communities for non-denominational Bible-based conversations that make faith practical and alive in daily life. These gatherings inspire hope, strengthen local communities, and build global relationships rooted in shared faith and compassion.</p>
          <p>Led by Rev. Doris M. Smith, M.Div. , and Rev. Mark Onginjo, M.Div. the initiative bridges hearts and minds across borders — empowering participants to live out faith through service, dialogue, and global understanding.</p>
          <p>“Where faith meets life, hope grows.”</p>
        </Col>
        <Col>
          <h2>International Group Homes in Nairobi, Kenya</h2>
          <p>Caring Beyond Borders — One Home, One Heart at a Time</p>
          <p>Platform of Hope has adopted three group homes in Nairobi, Kenya, extending our outreach to children and youth in need of care, education, and emotional support.</p>
          <p>Through our “Hope in Action” effort, we send quarterly shipments of essential and uplifting items — including coloring books, soccer balls, school supplies, and toiletries — to nurture creativity, joy, and dignity among the children we serve.</p>
          <p>You can be part of this mission by donating directly through our Amazon Wish List or Linktree to ensure every contribution makes an immediate difference.</p>
        </Col>
      </Row>
    </div>
  );
}

export default International;

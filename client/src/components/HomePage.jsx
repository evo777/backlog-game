import React from 'react';
import BulletFeatures from './BulletFeatures.jsx';
import { Card, CardTitle } from 'material-ui/Card';


const HomePage = () => (
  <Card className="container">
    <CardTitle title="Backlog Games" subtitle="Welcome! This website helps you keep track of the backlog of your video games. You can: "/>
    <BulletFeatures />
    <img className="homeImage" src={'https://i.redd.it/3v6lo3unay2y.png'} />
  </Card>
);

export default HomePage;
import React from 'react'
import Navi from './Navi'
import Users from './Users'
import Candidates from '../pages/Candidates'
import Employers from '../pages/Employers'
import SystemUsers from '../pages/SystemUsers'
import Login from './Login'
import { Grid } from 'semantic-ui-react'
export default function MainDashboard() {
    return (
        <div>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={16}>
                       <label >Employers</label> 
                        <Employers/>
                        Candidates
                        <Candidates/>
                        System Users
                        <SystemUsers />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    );
}

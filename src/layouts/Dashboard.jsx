import React from 'react'
import Categories from "./Categories";
import JobPositionList from "../pages/JobPositionList";
import JobPostingList from "../pages/JobPostingList";
import { Grid } from 'semantic-ui-react'
import { Route } from "react-router";

export default function Dashboard() {
    return (
        <div>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={4}><br></br>
                        <Categories />
                    </Grid.Column>
                    <Grid.Column width={12}>
                        <Route exact path="/jobpositions" component={JobPositionList} />
                        <Route exact path="/jobpostings" component={JobPostingList} />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            <Grid>
            </Grid>
        </div>
    )
}

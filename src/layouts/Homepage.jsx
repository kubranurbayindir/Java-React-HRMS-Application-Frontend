import React from 'react'
import Categories from "./Categories";
import JobPositionList from "../pages/JobPositionList";
import JobPostingList from "../pages/JobPostingList";
import { Grid } from 'semantic-ui-react'

export default function Homepage() {
    return (
        <div>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={4}>
                        <Categories />
                    </Grid.Column>
                    <Grid.Column width={12}>
                        <JobPostingList />
                        <JobPositionList />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}

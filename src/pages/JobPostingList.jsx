import React, { useState, useEffect } from 'react'
import { Icon, Menu, Table } from 'semantic-ui-react'
import JobPostingService from "../services/jobPostingService.js";

export default function JobPostingList() {    

    const [jobPostings, setJobPostings] = useState([]) //DESTRUSTURİNG
    
    useEffect(()=>{
        let jobPostingService = new JobPostingService()
        jobPostingService.getJobPostings().then(result=>setJobPostings(result.data.data))
      },[])
    return (
        <div>
             <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>İş Tanımı</Table.HeaderCell>
                        <Table.HeaderCell>İş İlan Tarihi</Table.HeaderCell>
                        <Table.HeaderCell>Son Başvuru Tarihi</Table.HeaderCell>
                        <Table.HeaderCell>Minimum Maaş</Table.HeaderCell>
                        <Table.HeaderCell>Maximum Maaş</Table.HeaderCell>
                        <Table.HeaderCell>Açık Pozisyon Sayısı</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {jobPostings.map((jobPosting) => (
                        <Table.Row key={jobPosting.idPost}>
                        <Table.Cell>{jobPosting.jobDescription}</Table.Cell>
                        <Table.Cell>{jobPosting.post_date}</Table.Cell>
                        <Table.Cell>{jobPosting.post_deadline}</Table.Cell>
                        <Table.Cell>{jobPosting.minSalary}</Table.Cell>
                        <Table.Cell>{jobPosting.maxSalary}</Table.Cell>
                        <Table.Cell>{jobPosting.openPositionNumber}</Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>

                <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell colSpan='3'>
                            <Menu floated='right' pagination>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron left' />
                                </Menu.Item>
                                <Menu.Item as='a'>1</Menu.Item>
                                <Menu.Item as='a'>2</Menu.Item>
                                <Menu.Item as='a'>3</Menu.Item>
                                <Menu.Item as='a'>4</Menu.Item>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron right' />
                                </Menu.Item>
                            </Menu>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>
            </Table>
        </div>
    )
}

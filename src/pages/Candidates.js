import React,{useState,useEffect} from 'react'
import { Icon, Label, Menu, Table } from 'semantic-ui-react'
import candidateService from '../services/candidateService'
import CandidateService from '../services/candidateService'
export default function Candidates() {


  const [candidates, setCandidates] = useState([])

  useEffect(()=>{
    let candidateService=new CandidateService()
    candidateService.getCandidates().then(result=>setCandidates(result.data))
  })

  return (


    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>SurName</Table.HeaderCell>
            <Table.HeaderCell>Identity</Table.HeaderCell>
            <Table.HeaderCell>Birth Date</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {
            candidates.map((candidates) => (
              <Table.Row key={candidates.id}>
                <Table.Cell>{candidates.name}</Table.Cell>
                <Table.Cell>{candidates.surName}</Table.Cell>
                <Table.Cell>{candidates.identityNumber}</Table.Cell>
                <Table.Cell>{candidates.birth_date}</Table.Cell>
              </Table.Row>
            ))
          }


        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan='4'>
              <Menu floated='right' pagination>
                <Menu.Item as='a' icon>
                  <Icon name='chevron left' />
                </Menu.Item>
                <Menu.Item as='a'>1</Menu.Item>
                <Menu.Item as='a'>2</Menu.Item>
                <Menu.Item as='a'>3</Menu.Item>
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

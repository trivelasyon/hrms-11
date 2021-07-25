import React, { useState, useEffect } from 'react'
import { Icon, Label, Menu, Table } from 'semantic-ui-react'
import EmployerService from '../services/employerService'
export default function Employers() {


  const [employers, setEmployers] = useState([])

  useEffect(() => {
    let employerService = new EmployerService()
    employerService.getEmployers().then(result => setEmployers(result.data))
  })



  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>WebSite</Table.HeaderCell>
            <Table.HeaderCell>Phone</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>

          {
            employers.map((employers) => (
              <Table.Row key={employers.id}>
                <Table.Cell>{employers.name}</Table.Cell>
                <Table.Cell>{employers.web_site}</Table.Cell>
                <Table.Cell>{employers.phone}</Table.Cell>
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

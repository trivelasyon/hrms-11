import React,{useState,useEffect} from 'react'
import { Icon, Label, Menu, Table } from 'semantic-ui-react'
import SystemUserService from '../services/systemUserService'
export default function SystemUsers(){

const [systemUser, setSystemUser] = useState([])

useEffect(() => {
  let systemUserService = new SystemUserService()
  systemUserService.getSystemUser().then(result => setSystemUser(result.data.data))
})

    return (
        <div>
             <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Name</Table.HeaderCell>
        <Table.HeaderCell>SurName</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
    {
              systemUser.map((sys) => (
                <Table.Row key={sys.id}>
                  <Table.Cell>{sys.name}</Table.Cell>
                  <Table.Cell>{sys.surName}</Table.Cell>
                </Table.Row>
              ))
            }

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

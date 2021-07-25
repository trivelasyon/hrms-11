import React from 'react'
import { Menu } from 'semantic-ui-react'
export default function Users() {
    return (
        <div>
            <Menu pointing vertical>
                <Menu.Item
                    name='Candidate'
                />
                <Menu.Item
                    name='Employer'
                />
                <Menu.Item
                    name='SystemUser'
                />
            </Menu>
        </div>
    )
}

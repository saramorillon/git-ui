import React from 'react'
import { LogOut, Settings } from 'react-feather'
import { Jumbotron, Nav, Navbar, NavbarBrand, NavItem, NavLink } from 'reactstrap'
import { Page } from '../../models/Pages'
import { User } from '../../models/User'

export interface IHeaderProps {
  title: string
  user?: User
  repo: string
  branch: string
  path: string
  active: Page
}

export function Header({ title, user, repo, branch, path, active }: IHeaderProps): JSX.Element {
  function className(name: Page) {
    return name === active ? 'active' : ''
  }

  return (
    <header>
      <Navbar color="primary" dark expand="md">
        <NavbarBrand href="/">Mini Git</NavbarBrand>
        {user && (
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/users/list">
                <Settings size="1rem" className="mb-1" /> Admin
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/logout">
                <LogOut size="1rem" className="mb-1" /> Log out
              </NavLink>
            </NavItem>
          </Nav>
        )}
      </Navbar>
      <Jumbotron className="py-0">
        <h1 className="py-5 m-0">{title}</h1>
        {repo && (
          <Nav tabs className="mb-3">
            <NavItem>
              <NavLink className={className('files')} href={`/repo/${repo}/${branch}/files?path=${path}`}>
                Files
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className={className('commits')} href={`/repo/${repo}/${branch}/commits?path=${path}`}>
                Commits
              </NavLink>
            </NavItem>
          </Nav>
        )}
      </Jumbotron>
    </header>
  )
}

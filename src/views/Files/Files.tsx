import React from 'react'
import { Table } from 'reactstrap'

export interface IFilesProps {
  files: {
    path: string
    name: string
    type: 'file' | 'folder'
    icon: string
    lastCommit: {
      message: string
      date: string
    }
  }[]
  repo: string
  branch: string
}

export default function Files({ files, repo, branch }: IFilesProps): JSX.Element {
  return (
    <Table striped>
      <tbody>
        {files.map((file) => (
          <tr key={file.path}>
            <td>
              <span className="icon">
                <img src={`/icons/${file.icon}`} width="16" height="16" />
              </span>
              <a href={`/repo/${repo}/${branch}/files?path=${file.path}&type=${file.type}`}>{file.name}</a>
            </td>
            <td>{file.lastCommit.message}</td>
            <td>{file.lastCommit.date}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

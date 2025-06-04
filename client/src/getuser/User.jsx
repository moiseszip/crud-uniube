import React from 'react'
import './User.css'

const User = () => {
  return (
    <div className='userTable'>
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Adicionar Usuário
        </button>

        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th scope='col'>S.No.</th>
                    <th scope='col'>Nome</th>
                    <th scope='col'>Email</th>
                    <th scope='col'>Endereço</th>
                    <th scope='col'>Ações</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Moises</td>
                    <td>moises@gmail.com</td>
                    <td>Brasil</td>
                    <td>Update | Delete</td>
                </tr>
            </tbody>
        </table>

    </div>
  )
}

export default User
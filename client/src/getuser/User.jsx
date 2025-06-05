import React from 'react'
import './User.css'


const User = () => {
  return (
    <div className='userTable'>
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Adicionar Usuário <i class="fa-solid fa-user-plus"></i>
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
                    <td>joao</td>
                    <td>joao@email.com</td>
                    <td>brasil</td>
                    <td className='actionButtons'>
                        <button type="button" class="btn btn-info">
                            <i class="fa-solid fa-pen-to-square"></i>
                        </button>
                        <button type="button" class="btn btn-danger">
                            <i class="fa-solid fa-trash"></i>
                        </button>
                    </td>
                </tr>
            </tbody>    
        </table>

    </div>
  )
}

export default User
import {Request} from 'express'
import { makeMockResponse } from '../mocks/mockResponse'
import { UsersController } from "./usersController"

const teste = 'resultado'

describe('Users controller',()=>{
    const usersController = new UsersController();
    const mockRequest = {} as Request;
    const mockResponse = makeMockResponse();
    it('deve listar usuarios', ()=>{
        usersController.listarUsuario(mockRequest, mockResponse)
        expect(mockResponse.state.status).toBe(200)
        expect(mockResponse.state.json).toHaveLength(2)
    })

    it('deve criar um usiario',()=>{
        mockRequest.body = {
            name: 'novo'
        }
        usersController.criarUsuario(mockRequest, mockResponse)
        expect(mockResponse.state.status).toBe(201)
        expect(mockResponse.state.json).toMatchObject({mensagem: `Usuario novo`})
        
    })

    it('Não deve criar um usuário com o nome em branco', () => {
        mockRequest.body = {
          name: ''
        }
    
        usersController.criarUsuario(mockRequest, mockResponse)
        expect(mockResponse.state.status).toBe(403)
        expect(mockResponse.state.json).toMatchObject({mensagem: 'nome vazio'})
      })
})
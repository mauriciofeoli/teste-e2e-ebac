/// <reference types="cypress" />
import ProdutosPage from "../support/page_objects/nome-funcionliada.page";
import { faker } from '@faker-js/faker';

describe('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */

    beforeEach(() => {
        cy.visit('minha-conta/')
    });

    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
        var nome = faker.person.firstName()
        var email = faker.internet.email(nome)
        var sobrenome = faker.person.lastName()

        cy.preCadastro(faker.internet.email(), 'teste@123', faker.person.firstName(), faker.person.lastName())
        cy.get('.woocommerce-message').should('contain' , 'Detalhes da conta modificados com sucesso.')
        

        ProdutosPage.buscarProduto('Ajax Full-Zip Sweatshirt')
        ProdutosPage.addProdutoCarrinho('M', 'Red', 1)
        cy.get('.woocommerce-message').should('exist')

        ProdutosPage.buscarProduto('Geo Insulated Jogging Pant')
        ProdutosPage.addProdutoCarrinho('32', 'Red', 1)
        cy.get('.woocommerce-message').should('exist')

        ProdutosPage.buscarProduto('Hollister Backyard Sweatshirt')
        ProdutosPage.addProdutoCarrinho('S', 'White', 1)
        cy.get('.woocommerce-message').should('exist')

        ProdutosPage.buscarProduto('Stark Fundamental Hoodie')
        ProdutosPage.addProdutoCarrinho('XL', 'Purple', 1)
        cy.get('.woocommerce-message').should('exist')
        
        cy.get('#cart > .dropdown-toggle').click()
        cy.get('[class="button checkout wc-forward"]').eq(1).should('exist').click()
        
        cy.checkout(faker.location.street(), faker.location.city(), '55813529', '81994567832')
        cy.wait(1000)
        cy.get('.woocommerce-column__title').should('exist')
    });
    

})
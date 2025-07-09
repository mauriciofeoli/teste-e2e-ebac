class ProdutosPage {
    visitarUrl(){
        cy.visit('produtos')
    }

    buscarProduto(nomeProduto){
        cy.get('[name="s"]').eq(1).type(nomeProduto)
        cy.get('.button-search').eq(1).click()
    }
    
    addProdutoCarrinho(Tamanho, Cor, Quantidade){
        cy.get('.button-variable-item-' + Tamanho).click()
        cy.get('.button-variable-item-' + Cor).click()
        cy.get('.input-text').clear().type(Quantidade)
        cy.get('.single_add_to_cart_button').click()
    }

}

export default new ProdutosPage()
<?php

namespace App\Traits;

trait ProdutoTrait
{
    public function calcularPrecoComDesconto()
    {
        return $this->valor - $this->desconto;
    }
}

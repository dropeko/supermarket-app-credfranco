<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Traits\ProdutoTrait;

class Produto extends Model
{
    use HasFactory;
    use ProdutoTrait;
    
    const TABLE = 'produtos';

    protected $table = self::TABLE;

    // Protect para mass assignment
    protected $fillable = [
      'nome',
      'valor',
      'desconto',
      'pontos',
    ];

    // Adicionar os campos
    public function id(): string 
    {
      return (string) $this->id;
    }
    public function nome(): string 
    {
      return (string) $this->nome;
    }
    public function valor(): string 
    {
      return (string) $this->valor;
    }
    public function desconto(): string 
    {
      return (string) $this->desconto;
    }
    public function pontos(): string 
    {
      return (string) $this->pontos;
    }
}

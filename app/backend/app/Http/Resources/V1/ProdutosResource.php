<?php

namespace App\Http\Resources\V1;

use Illuminate\Http\Resources\Json\JsonResource;

class ProdutosResource extends JsonResource
{

    public static $wrap = 'produtos';
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
          'type' => 'produtos',
          'id' => $this->id(),
          'attributes' => [
            'nome' => $this->nome(),
            'valor' => $this->valor(),
            'desconto' => $this->desconto(),
            'pontos' => $this.pontos(),
          ]
        ];
    }

    public function with($request) {
      return [
        'status' => 'success',
      ];
    }

    public function withResponse($request, $response) {
      $response->header('Accept', 'application/json');
    }
}

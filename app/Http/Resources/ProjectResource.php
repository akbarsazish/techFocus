<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Carbon\Carbon;

class ProjectResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        // return parent::toArray($request);
        return [
            'id' => $this->id,
            'name' => $this->name,
            'description' => $this->description,
            'created_at' => (new Carbon($this->created_at))->format('d/m/Y'),
            'due_date' => (new Carbon($this->updated_at))->format('d/m/Y'),
            'status' => $this->status,
            'image_path' => $this->image_path,
            'created_at' => $this->created_at,
            'updated_by' => $this->updated_by,

        ];
    }
}

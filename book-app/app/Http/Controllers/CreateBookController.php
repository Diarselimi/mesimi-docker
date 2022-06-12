<?php

namespace App\Http\Controllers;

use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\DB;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;

class CreateBookController extends Controller
{
    public function create(Request $request): JsonResponse
    {
        $data = $request->request->all();
        $res = DB::table('books')->insert([
            'cover' => $data['cover'],
            'title' => $data['title'],
            'description' => $data['description'],
            'authors' => $data['authors'],
            'topics' => 0,
        ]);

        return new JsonResponse([], 200);
    }
}
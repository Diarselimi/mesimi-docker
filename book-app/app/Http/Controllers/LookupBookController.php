<?php

namespace App\Http\Controllers;

use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Http;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;

class LookupBookController extends Controller
{
    public function search(Request $request): JsonResponse
    {   $apiKey = env('GOOGLE_API_KEY');
        $url = 'https://www.googleapis.com/books/v1/volumes?q='.$request->get('keyword').'+intitle:'.$request->get('keyword').'&key='.'AIzaSyBE29rBSZOx_PEk8OJMj2EEkCexRBLdGL8';
        $res = Http::get($url);
        $body = json_decode($res->body(), true);

        $books = $body['items'];

        $responseStructure = [
            'cover' => $books[0]['volumeInfo']['imageLinks']['thumbnail'],
            'title' => $books[0]['volumeInfo']['title'],
            'description' => $books[0]['volumeInfo']['title'],
            'authors' => implode(',',$books[0]['volumeInfo']['authors'])
        ];
        
        return new JsonResponse(['books' => [$responseStructure]], 200);
    }
}
<?php

namespace App\Http\Controllers;

use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\DB;
use Symfony\Component\HttpFoundation\JsonResponse;


class PopularBooksController extends Controller
{
    public function show(): JsonResponse
    {
        $db = DB::table('books')->select('*')->get();
        
        // $books = <<<BOOKS
        // [
        //     {
        //       "title": "Zero to one",
        //       "cover": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1630663027i/18050143.jpg",
        //       "desc": "The next Bill Gates will not build an operating system. The next Mark Zuckerberg won't create a social network. It's easier to copy a model than to make something new: doing what we already know how to do takes the world from 1 to n, adding more of something familiar. Every time we create something new, we go from 0 to 1. The more you compete, the more you become similar to everyone else. Zero to One is about how to build companies that create new things. Ask not, what would Mark do? Ask: What valuable company is nobody building?",
        //       "topics": 5,
        //       "authors": "Peter Thiel, Blake Masters"
        //     },
        //     {
        //       "title": "The Millionaire Fastlane",
        //       "cover": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1384971700i/18872437.jpg",
        //       "desc": "The great secret of our time is that there are still uncharted frontiers to explore and new inventions to create. In Zero to One, legendary entrepreneur and investor Peter Thiel shows how we can find singular ways to create those new things.",
        //       "topics": 5,
        //       "authors": "M.J. DeMarco"
        //     },
        //     {
        //       "title": "Principles",
        //       "cover": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1503365703i/34536488.jpg",
        //       "desc": "Ray Dalio, one of the world’s most successful investors and entrepreneurs, shares the unconventional principles that he’s developed, refined, and used over the past forty years to create unique results in both life and business—and which any person or organization can adopt to help achieve their goals.",
        //       "topics": 5,
        //       "authors": "Ray Dalio"
        //     }
        //   ]
        // BOOKS;
        return new JsonResponse(['books' => $db], 200, ['Content-Type' => 'application/json']);
    }
}
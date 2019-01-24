@extends('layouts.app')

@section('title', $post->title)
@section('meta_description', $post->excerpt)
@section('meta_author', $post->user->username)

@section('header_scripts')
<script type="application/ld+json">
    {
        "@context":"http://schema.org",
        "@type": "BlogPosting",
        "image": "{{$post->header_image}}",
        "url": "{{url()->full()}}",
        "headline": "{{$post->title}}",
        "dateCreated": "{{$post->created_at}}",
        "datePublished": "{{$post->published_at}}",
        "dateModified": "{{$post->updated_at}}",
        "inLanguage": "en-FR",
        "isFamilyFriendly": "true",
        "copyrightYear": "2018",
        "copyrightHolder": "",
        "contentLocation": {
            "@type": "Place",
            "name": "Villefranche sur Mer, France"
        },
        "accountablePerson": {
            "@type": "Person",
            "name": "{{$post->user->username}}",
            "url": "{{ config('app.url') }}/users/{{$post->user->username}}"
        },
        "author": {
            "@type": "Person",
            "name": "{{$post->user->username}}",
            "url": "{{ config('app.url') }}/users/{{$post->user->username}}"
        },
        "creator": {
            "@type": "Person",
            "name": "{{$post->user->username}}",
            "url": "{{ config('app.url') }}/users/{{$post->user->username}}"
        },
        "publisher": {
            "@type": "Organization",
            "name": "{{ config('app.name') }}",
            "url": "{{ config('app.url') }}",
            "logo": {
                "@type": "ImageObject",
                "url": "{{config('app.url') }}/images/logo.svg",
                "width":"60",
                "height":"60"
            }
        },
        "mainEntityOfPage": "True",
        "keywords": [
        @foreach($post->categories as $category)
            "{{$category->name}}",
        @endforeach
            "{{ config('app.name') }}"
        ],
        "genre":["Travel",
        @foreach($post->categories as $category)
            "{{$category->name}}",
        @endforeach
        ],
        "articleSection": "Uncategorized posts",
        "articleBody": "{{ $post->body_markdown }}"
    }
</script>
@endsection

@section('left_sidebar')

@endsection

@section('sidebar')
    <p><a href="/users/{{$post->user->username}}"><img class="rounded img-thumbnail mr-1" src="{{$post->user->avatar}}" height="45" width="45" alt="{{$post->user->username}}">{{$post->user->username}}</a></p>
    <p class="mb-0">Last updated {{ $post->updated_at->diffForHumans() }}</p>
    @if ($post->published_at)
        <small>Published {{ $post->published_at->diffForHumans() }}</small>
    @endif
    <hr>
    @foreach($post->categories as $category)
        <a href="/categories/{{$category->slug}}"><img class="rounded img-thumbnail mr-1" height="30" width="30" src="{{$category->icon}}" alt="{{$category->name}}">{{$category->name}}</a>
    @endforeach
    <hr>
    @parent
@endsection

@section('above_container')

        <img src="{{$post->header_image}}" style="height: 67vh;object-fit:cover;width:100%;" alt="{{ $post->title }}">

@endsection

@section('content')
    <article>
        <h1 class="mt-5 mb-4">{{ $post->title }}</h1>
        @if ($post->published_at)
            <p class="text-justify">
                @markdown{{ $post->body_markdown }}
                @endmarkdown
            </p>
        @else
            <p>Stay tuned! This post is not yet published.</p>
        @endif
    </article>
@endsection

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    {{-- ReactJS Intertia Add-on --}}
    @viteReactRefresh
    @vite('resources/js/app.jsx')
    {{-- Import TailwindCSS --}}
    @vite('resources/css/app.css')
    {{-- Import PhosphorIcons --}}
    <script src="https://unpkg.com/@phosphor-icons/web"></script>
    @inertiaHead
</head>
<body class="bg-primaryDark">
    @inertia
    
</body>
</html>
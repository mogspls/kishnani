<?php
    $pagetitle = "Archetypes";
    include('inc/header.php');
?>

<style>
    .slider {
        height: 50vh;
        width: 100%;
        background: #444;
    }
    #carousel {
        display: flex;
    }
    .slider-1 { background: #f7b733 }
    .slider-2 { background: #ABCDEF }
    .slider-3 { background: #BE4ACD }
    .slider-4 { background: #fc4a1a }
    
</style>
<main id="disney" class="layout">
    <div class="container">
        <h1 style="padding: 50px 0px; color: #fff;">Disney</h1>
        <section id="carousel">
            <div class="slider slider-1">Slider 1</div>
            <div class="slider slider-2">Slider 2</div>
            <div class="slider slider-3">Slider 3</div>
            <div class="slider slider-4">Slider 4</div>
        </section>
    </div>
</main>

<?php
    include("inc/footer.php");
?>
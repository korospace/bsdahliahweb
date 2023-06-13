<?= $this->extend('Layout/template') ?>

<!-- Css -->
<?= $this->section('contentCss'); ?>
    <link rel="stylesheet" href="<?= base_url('assets/css/purge/bootstrap/homepage.css'); ?>">

    <style>
        
    </style>
<?= $this->endSection(); ?>

<!-- JS -->
<?= $this->section('contentJs'); ?>
    <script src="<?= base_url('assets/js/homepage.min.js'); ?>"></script>

    <script>
      
    </script>
<?= $this->endSection(); ?>

<!-- Body -->
<?= $this->section('content'); ?>

  <!-- **** Loading Spinner **** -->
  <?= $this->include('Components/loadingSpinner'); ?>
  <!-- **** Alert info **** -->
  <?= $this->include('Components/alertInfo'); ?> 
  
<?= $this->endSection(); ?>
<?php
defined('BASEPATH') or exit('No direct script access allowed');
?>
<?php
$this->load->view('includes/header');
$this->load->view('includes/navbar');
?>
<main>
    <div class="container">
        <div class="form-wrapper">
            <h3 class="lead">Sign Up</h3>
            <form action="<?php echo base_url() . 'register'; ?>" method="post">
                <?php $this->load->view('includes/message'); ?>
                <?= validation_errors() ?>
                <div class="row">
                    <div class="form-group col">
                        <label for="first-name">First Name</label>
                        <input type="text" name="first-name" id="first-name" placeholder="Enter Your First Name" required autofocus>
                    </div>
                    <div class="form-group col">
                        <label for="last-name">Last Name</label>
                        <input type="text" name="last-name" id="last-name" placeholder="Enter Your Last Name">
                    </div>
                </div>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" name="email" id="email" placeholder="Enter Your Email" />
                    <small class="input-hint">Enter your personal email.</small>
                </div>
                <div class="form-group">
                    <label for="number">Phone Number</label>
                    <input type="number" name="number" id="number" placeholder="Enter Your Mobile Number" required />
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" name="password" id="password" placeholder="Enter Password" required />
                    <i class="password-toggler fa fa-eye" title="Show Password"></i>
                    <small class="input-hint">Password is case-sensitive.</small>
                    </div>
                </div>
                <div class="form-group">
                    <label for="gender">Gender</label>
                    <select name="gender" id="gender" required>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="others">Others</option>
                    </select>
                    <div class="form-group">
                        <input type="submit" class="btn btn-primary" value="SignUp">
                    </div>
                    <p>Already Have an Account? <a href="<?php echo  base_url("login"); ?>" class="text-primary">Login</a></p>
            </form>
        </div>
    </div>
</main>
<script src="<?php echo base_url(); ?>assets/js/main.js"></script>
<script src="<?php echo base_url(); ?>assets/js/form.js"></script>
<?php
$this->load->view('includes/footer');
?>
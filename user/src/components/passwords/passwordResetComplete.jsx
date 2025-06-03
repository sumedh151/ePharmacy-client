{% extends 'base.html' %}

{% load static}

{% block content %}
  <div class="container h-100 w-100">

    <!-- Outer Row -->
    <div class="row justify-content-center">

      <div class="col-xl-10 col-lg-12 col-md-9">

        <div class="card o-hidden border-0 shadow-lg my-5">
          <div class="card-body p-0">
            <!-- Nested Row within Card Body -->
            <div class="row">
              <div class="col-lg-6 d-none d-lg-block bg-password-image"></div>
              <div class="col-lg-6">
                <div class="p-5">
                  <div class="text-center">
                    <h1 class="h4 text-gray-900 mb-2">Password Reset Done</h1>
                    </br>
                    <p class="mb-4">Your password has been set. You may go ahead and login with your new credentials.</p>
                  </div>
                  <hr>
                  <div class="text-center">
                    <a class="small" href="/login">Login</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>

  </div>

{% endblock %}
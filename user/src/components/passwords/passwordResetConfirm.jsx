{% extends 'base.html' %}

{% load static}
{% load widget_tweaks %}
{% block content %}

{% if validlink %}  
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
                        <h1 class="h4 text-gray-900 mb-2">Enter New Password</h1>
                        <p class="mb-4">Please enter your new password twice so we can verify you typed it in correctly</p>
                    </div>
                    <form class="user" enctype="multipart/form-data" method="post">
                        {% csrf_token %}
                        {% for field in form %}
                                {{ field.label_tag }}<br>
                                <!-- {{ field }} -->
                                {% render_field field class="form-control form-control-user" placeholder="" %}
                                {% for error in field.errors %}
                            <p style="color: red">{{ error }}</p>
                            {% endfor %}
                            </p>
                        {% endfor %}
                        <button type = "submit" class="btn btn-primary btn-user btn-block">
                        Change my Password
                        </button>
                    </form>
                    <hr>
                    </div>
                </div>
                </div>
            </div>
            </div>

        </div>

        </div>

    </div>
{% else %}
    <p>
    The password reset link was invalid, possibly because it has already been used.
    Please request a new password reset.
    </p>
{% endif %}
{% endblock %}
# areYouSure

## Usage

    <a href="#" class="confirm">Delete</a>
    $('.confirm').areYouSure({message: 'Really ?!'});

In this sample we've definied default message that will be displayed as confirmation.


    <a href="#" data-message="Are you sure?" class="confirm">Delete</a>
    $('.confirm').areYouSure({message: 'This message will not be displayed'});

Here we've overrided 'This message will not be displayed' with 'Are you sure?'.</p>


    <a href="#" data-active="active" class="confirm">Delete</a>
    $('.confirm').areYouSure();

On click "active" class will be added to link.

This is also possible:

    $('.confirm').areYouSure({active: 'active'});

## License

Released under MIT license.
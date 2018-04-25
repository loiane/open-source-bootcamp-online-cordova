import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { DomSanitizer } from '@angular/platform-browser';
import { ContactsProvider } from '../../providers/contacts/contacts';

/**
 * Generated class for the ContactFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contact-form',
  templateUrl: 'contact-form.html',
})
export class ContactFormPage implements OnInit {

  form: FormGroup;
  image: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private fb: FormBuilder,
    private camera: Camera,
    public domSanitizer: DomSanitizer,
    private service: ContactsProvider
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactFormPage');
  }

  ngOnInit() {
    this.form = this.fb.group({
      name: [''],
      picture: [null]
    });
  }

  onTakePicture() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // I it's base64:
     this.image = 'data:image/jpeg;base64,' + imageData;
     this.form.get('picture').setValue(this.image);
    }, (err) => {
     console.log(err);
    });
  }

  onSave() {
    this.service.create(this.form.value)
    .subscribe(data => this.navCtrl.pop(),
      error => console.error(error)
    )
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  arrayOfImages: string[] = [];

  constructor() {
    this.arrayOfImages.push('aix.png');
    this.arrayOfImages.push('ansible.png');
    this.arrayOfImages.push('bsd.png');
    this.arrayOfImages.push('c++.png');
    this.arrayOfImages.push('c.png');
    this.arrayOfImages.push('cassandra.png');
    this.arrayOfImages.push('ceph.png');
    this.arrayOfImages.push('cheff.png');
    this.arrayOfImages.push('cloudfoundry.png');
    this.arrayOfImages.push('cloudstack.png');
    this.arrayOfImages.push('devops.png');
    this.arrayOfImages.push('devuan.png');
    this.arrayOfImages.push('docker.png');
    this.arrayOfImages.push('elasticsearch.png');
    this.arrayOfImages.push('git.png');
    this.arrayOfImages.push('go.png');
    this.arrayOfImages.push('hadoop.png');
    this.arrayOfImages.push('hpux.png');
    this.arrayOfImages.push('informix.png');
    this.arrayOfImages.push('java.png');
    this.arrayOfImages.push('juju.png');
    this.arrayOfImages.push('keras.png');
    this.arrayOfImages.push('kubernetes.png');
    this.arrayOfImages.push('kvm.png');
    this.arrayOfImages.push('linux.png');
    this.arrayOfImages.push('lxc.png');
    this.arrayOfImages.push('maas.png');
    this.arrayOfImages.push('mariadb.png');
    this.arrayOfImages.push('openstack.png');
    this.arrayOfImages.push('ovirt.png');
    this.arrayOfImages.push('pacemaker.png');
    this.arrayOfImages.push('perl.png');
    this.arrayOfImages.push('postgresql.png');
    this.arrayOfImages.push('python.png');
    this.arrayOfImages.push('rust.png');
    this.arrayOfImages.push('saltstack.png');
    this.arrayOfImages.push('solaris.png');
    this.arrayOfImages.push('spark.png');
    this.arrayOfImages.push('tensorflow.png');
    this.arrayOfImages.push('xen.png');
    this.arrayOfImages.push('zookeeper.png');
  }

  ngOnInit(): void {
  }

}

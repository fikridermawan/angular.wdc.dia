import { Component } from '@angular/core';
import { Dosen } from './class/dosen';
import { Honorer } from './class/dosen/honorer';
import { Tetap } from './class/dosen/tetap';
import { Mahasiswa } from './class/mahasiswa';
import { Karyawan } from './class/mahasiswa/karyawan';
import { Reguler } from './class/mahasiswa/reguler';
import { MataKuliah } from './class/mata-kuliah';
import { Pilihan } from './class/mata-kuliah/pilihan';
import { Wajib } from './class/mata-kuliah/wajib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app-fikri';

  constructor() {
    const MahasiwaA = new Mahasiswa();

    MahasiwaA.setNim("1811501285");
    MahasiwaA.setNama("Fikri Dermawan");
    MahasiwaA.setJenisKelamin("Laki-laki");

    console.log(MahasiwaA.getNim());
    console.log(MahasiwaA.getNama());
    console.log(MahasiwaA.getJenisKelamin());

    const MahasiwaB = new Reguler();

    MahasiwaB.setNim("1811501234");
    MahasiwaB.setNama("Putra");
    MahasiwaB.setJenisKelamin("Laki-laki");

    console.log(MahasiwaB.getNim());
    console.log(MahasiwaB.getNama());
    console.log(MahasiwaB.getJenisKelamin());

    const MahasiwaC = new Karyawan();

    MahasiwaC.setNim("1811505678");
    MahasiwaC.setNama("Putri");
    MahasiwaC.setJenisKelamin("Perempuan");

    console.log(MahasiwaC.getNim());
    console.log(MahasiwaC.getNama());
    console.log(MahasiwaC.getJenisKelamin());

    const DosenA = new Dosen();

    DosenA.setNip("11001");
    DosenA.setNama("Gunawan");
    DosenA.setJenisKelamin("Laki-laki");

    console.log(DosenA.getNip());
    console.log(DosenA.getNama());
    console.log(DosenA.getJenisKelamin());

    const DosenB = new Tetap();

    DosenB.setNip("22002");
    DosenB.setNama("Imelda");
    DosenB.setJenisKelamin("Perempuan");

    console.log(DosenB.getNip());
    console.log(DosenB.getNama());
    console.log(DosenB.getJenisKelamin());

    const DosenC = new Honorer();

    DosenC.setNip("33003");
    DosenC.setNama("Alexander");
    DosenC.setJenisKelamin("Laki-laki");

    console.log(DosenC.getNip());
    console.log(DosenC.getNama());
    console.log(DosenC.getJenisKelamin());

    const MatkulA = new MataKuliah();

    MatkulA.setKode("MK11");
    MatkulA.setNamaMatkul("Bahasa Inggris");
    MatkulA.setSks(3);

    console.log(MatkulA.getKode());
    console.log(MatkulA.getNamaMatkul());
    console.log(MatkulA.getSks());
    
    const MatkulB = new Wajib();

    MatkulB.setKode("MK22");
    MatkulB.setNamaMatkul("Algoritma dan Struktur Data");
    MatkulB.setSks(4);

    console.log(MatkulB.getKode());
    console.log(MatkulB.getNamaMatkul());
    console.log(MatkulB.getSks());

    const MatkulC = new Pilihan();

    MatkulC.setKode("MK33");
    MatkulC.setNamaMatkul("Bahasa Inggris Lanjutan");
    MatkulC.setSks(2);

    console.log(MatkulC.getKode());
    console.log(MatkulC.getNamaMatkul());
    console.log(MatkulC.getSks());

  }
}

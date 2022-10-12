export class Mahasiswa {
    nim: string = "";
    nama: string = "";
    jenisKelamin: string = "";

    setNim(nim: string){
        this.nim = nim;
    }
    setNama(nama: string){
        this.nama = nama;
    }
    setJenisKelamin(jenisKelamin: string){
        this.jenisKelamin = jenisKelamin;
    }

    getNim(): string {
        return this.nim;
    }
    getNama(): string {
        return this.nama;
    }
    getJenisKelamin(): string {
        return this.jenisKelamin;
    }
}

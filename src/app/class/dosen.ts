export class Dosen {
    nip: string = "";
    nama: string = "";
    jenisKelamin: string = "";

    setNip(nip: string){
        this.nip = nip;
    }
    setNama(nama: string){
        this.nama = nama;
    }
    setJenisKelamin(jenisKelamin: string){
        this.jenisKelamin = jenisKelamin;
    }

    getNip(): string {
        return this.nip;
    }
    getNama(): string {
        return this.nama;
    }
    getJenisKelamin(): string {
        return this.jenisKelamin;
    }
}

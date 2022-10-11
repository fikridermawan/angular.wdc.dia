export class Dosen {
    nip: number = 0;
    nama: string = "";
    jenisKelamin: string = "";

    setNip(nip: number){
        this.nip = nip;
    }
    setNama(nama: string){
        this.nama = nama;
    }
    setJenisKelamin(jenisKelamin: string){
        this.jenisKelamin = jenisKelamin;
    }

    getNip(): number {
        return this.nip;
    }
    getNama(): string {
        return this.nama;
    }
    getJenisKelamin(): string {
        return this.jenisKelamin;
    }
}

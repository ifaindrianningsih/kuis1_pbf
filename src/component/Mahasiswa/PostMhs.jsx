import React from "react";

const Mhs = (props) => {
    return (
        <div className="mahasiswa">
            <div className="gambar-mahasiswa">
                <img src="http://placeimg.com/80/80/tech" alt="Gambar Mahasiswa" />
            </div>
            <div className="container px-4 py-2">
            <div className="konten-mahasiswa">
                <div className="nama-mahasiswa">{props.nama}</div>
                <p className="nim-mahasiswa">NIM : {props.nim}</p>
                <p className="alamat-mahasiswa">Alamat : {props.alamat}</p>
                <p className="hp-mahasiswa">No Handphone : {props.hp}</p>
                <p className="angkatan-mahasiswa">Angkatan : {props.angkatan}</p>
                <p className="status-mahasiswa">Status : {props.status}</p>
                <button className="btn btn-sm btn-danger" onClick={() => props.hapusMahasiswa(props.idMahasiswa)}>Hapus</button>
            </div>
            </div>
        </div>
    )
}

export default Mhs;
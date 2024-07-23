import "./AreaDetailsProfile.scss";

const AreaDetailsProfile = () => {
  return (
    <div className="area-details-profile">
      <div className="area-details-container">
        <p className="area-details-title-head">Profile Saya</p>
        <div className="divider-profile"></div>
        <div className="area-details-content">
          {/*Alamat*/}
          <div className="area-details-sub-content">
            <p className="area-details-title-content">Alamat</p>
            <p className="area-details-title">Matungkas, Homeland Residence</p>
          </div>

          {/*Tahun Masuk*/}
          <div className="area-details-sub-content">
            <p className="area-details-title-content">Tahun Masuk</p>
            <p className="area-details-title">2017</p>
          </div>

          {/*Tempat Lahir*/}
          <div className="area-details-sub-content">
            <p className="area-details-title-content">Tempat Lahir</p>
            <p className="area-details-title">Barong Tongkok</p>
          </div>

          {/*Tanggal Lahir*/}
          <div className="area-details-sub-content">
            <p className="area-details-title-content">Tanggal Lahir</p>
            <p className="area-details-title">28 September 2002</p>
          </div>

          {/*NIK*/}
          <div className="area-details-sub-content">
            <p className="area-details-title-content">NIK</p>
            <p className="area-details-title">6407072809020001</p>
          </div>

          {/*Agama*/}
          <div className="area-details-sub-content">
            <p className="area-details-title-content">Agama</p>
            <p className="area-details-title">Kristen</p>
          </div>

          {/*Status*/}
          <div className="area-details-sub-content">
            <p className="area-details-title-content">Status</p>
            <p className="area-details-title">Aktif</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AreaDetailsProfile;

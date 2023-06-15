function MainVideo() {

  return (
    <>
      <video className="absolute top-0 left-0 w-full h-full object-cover" autoPlay muted loop >
        <source src='/assets/videos/TollsVideo.mp4' type='video/mp4'/>
      </video>
    </>
  )
}

export default MainVideo
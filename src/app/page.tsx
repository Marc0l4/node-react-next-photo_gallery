"use client"

import { Galery } from "@/components/Galery";
import { Modal } from "@/components/Modal";
import { imgs } from "@/data/imgs";
import { useState } from "react";

const Page = () => {
  const [showModal, setShowModal] = useState(false);
  const [imageOfModal, setImageOfModal] = useState('');

  const openModal = (id: number) => {
    const result = imgs.find(item => item.id === id);

    if (result) {
      setShowModal(true);
      setImageOfModal(result.url);
    }
  }

  const closeModal = () => {
    setShowModal(false);
  }

  return (
    <div className="container mx-auto text-center text-2xl">

      <div>
        <h1 className="font-bold my-10">Fotos intergalaticas</h1>

        <div className="grid grid-cols-1 gap-8 mb-4
            md:grid-cols-2
            lg:grid-cols-3">
          {imgs.map(item => (
            <Galery key={item.id} img={item} onClick={() => openModal(item.id)} />
          ))}
        </div>
      </div>
      {showModal &&
        <Modal image={imageOfModal} closeModal={closeModal} />
      }

    </div>
  );
}

export default Page;
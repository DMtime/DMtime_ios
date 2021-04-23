export interface AddBoardRequest {
  gallery_type: number;
  gallery_id: string;
  explain: string;
  name: string;
}

const getAddBoardRequestDTO = (
  galleryType: number,
  galleryId: string,
  explain: string,
  name: string
): AddBoardRequest => {
  return {
    gallery_id: galleryId,
    gallery_type: galleryType,
    explain,
    name,
  };
};

export default getAddBoardRequestDTO;

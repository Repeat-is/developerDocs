import { useEffect, useState } from "react";

type Props = {
  apiKey: string;
  variants: number[];
};

type RepeatResponse =
  | {
      repeat_uuid: string;
      shopify_variant_id: number;
      title: string;
    }[]
  | null;

export default function RepeatButton({ variants, apiKey }: Props) {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    fetch(
      `https://repeat.is/api/v1/shopify_variants/?variant_ids=${variants.join(
        ","
      )}`,
      {
        method: "GET",
        headers: {
          "x-api-key": apiKey,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((response: RepeatResponse) => {
        if (response && response.length > 0) {
          const repeatVariants = response.map(
            (variant) => variant.shopify_variant_id
          );
          const overlap = variants.some((variant) =>
            repeatVariants.includes(variant)
          );

          if (overlap) {
            setShowButton(true);
          }
        }
      });
  }, []);

  return showButton ? <a href="/lending">Kaupa í áskrift</a> : <></>;
}
